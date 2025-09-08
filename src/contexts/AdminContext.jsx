import React, { createContext, useContext, useReducer, useEffect, useMemo } from 'react'

// Initial state
const initialState = {
  isAuthenticated: false,
  user: null,
  data: {
    home: {},
    projects: { projects: [] },
    publications: { publications: [] },
    skills: { skills: [] },
    experience: { experience: [] },
    achievements: { achievements: [] },
    certifications: { certifications: [] },
    about: { about: [] },
    contact: { contact: [] }
  },
  activeTab: 'dashboard',
  sidebarOpen: false,
  editingItem: null,
  editingType: '',
  showAddForm: false,
  loading: false,
  error: null
}

// Action types
const ActionTypes = {
  SET_AUTHENTICATED: 'SET_AUTHENTICATED',
  SET_USER: 'SET_USER',
  SET_DATA: 'SET_DATA',
  UPDATE_DATA: 'UPDATE_DATA',
  SET_ACTIVE_TAB: 'SET_ACTIVE_TAB',
  SET_SIDEBAR_OPEN: 'SET_SIDEBAR_OPEN',
  SET_EDITING_ITEM: 'SET_EDITING_ITEM',
  SET_EDITING_TYPE: 'SET_EDITING_TYPE',
  SET_SHOW_ADD_FORM: 'SET_SHOW_ADD_FORM',
  SET_LOADING: 'SET_LOADING',
  SET_ERROR: 'SET_ERROR',
  RESET_STATE: 'RESET_STATE'
}

// Reducer
const adminReducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.SET_AUTHENTICATED:
      return { ...state, isAuthenticated: action.payload }
    
    case ActionTypes.SET_USER:
      return { ...state, user: action.payload }
    
    case ActionTypes.SET_DATA:
      return { ...state, data: action.payload }
    
    case ActionTypes.UPDATE_DATA:
      return {
        ...state,
        data: {
          ...state.data,
          [action.payload.type]: action.payload.data
        }
      }
    
    case ActionTypes.SET_ACTIVE_TAB:
      return { ...state, activeTab: action.payload }
    
    case ActionTypes.SET_SIDEBAR_OPEN:
      return { ...state, sidebarOpen: action.payload }
    
    case ActionTypes.SET_EDITING_ITEM:
      return { ...state, editingItem: action.payload }
    
    case ActionTypes.SET_EDITING_TYPE:
      return { ...state, editingType: action.payload }
    
    case ActionTypes.SET_SHOW_ADD_FORM:
      return { ...state, showAddForm: action.payload }
    
    case ActionTypes.SET_LOADING:
      return { ...state, loading: action.payload }
    
    case ActionTypes.SET_ERROR:
      return { ...state, error: action.payload }
    
    case ActionTypes.RESET_STATE:
      return initialState
    
    default:
      return state
  }
}

// Context
const AdminContext = createContext()

// Provider component
export const AdminProvider = ({ children }) => {
  const [state, dispatch] = useReducer(adminReducer, initialState)

  // Load data from localStorage on mount
  useEffect(() => {
    const loadData = () => {
      const loadedData = {}
      Object.keys(initialState.data).forEach(key => {
        const saved = localStorage.getItem(`portfolio_${key}`)
        if (saved) {
          try {
            const parsed = JSON.parse(saved)
            loadedData[key] = parsed
            console.log(`Loaded ${key} data:`, parsed)
          } catch (error) {
            console.error(`Error parsing ${key} data:`, error)
          }
        }
      })
      if (Object.keys(loadedData).length > 0) {
        console.log('Loaded data from localStorage:', loadedData)
        dispatch({ type: ActionTypes.SET_DATA, payload: { ...initialState.data, ...loadedData } })
      }
    }
    loadData()
  }, [])

  // Actions - memoized to prevent unnecessary re-renders
  const actions = useMemo(() => ({
    // Authentication
    login: (user) => {
      dispatch({ type: ActionTypes.SET_AUTHENTICATED, payload: true })
      dispatch({ type: ActionTypes.SET_USER, payload: user })
    },
    
    logout: () => {
      dispatch({ type: ActionTypes.RESET_STATE })
    },

    // Data management
    setData: (newData) => {
      dispatch({ type: ActionTypes.SET_DATA, payload: newData })
    },

    saveData: (type, newData) => {
      dispatch({ type: ActionTypes.UPDATE_DATA, payload: { type, data: newData } })
      localStorage.setItem(`portfolio_${type}`, JSON.stringify(newData))
    },

    addItem: (type, newItem) => {
      console.log('Adding item to', type, ':', newItem)
      const currentData = state.data[type]
      const firstKey = Object.keys(currentData)[0]
      const updatedData = {
        ...currentData,
        [firstKey]: [...(currentData[firstKey] || []), newItem]
      }
      console.log('Updated data for', type, ':', updatedData)
      dispatch({ type: ActionTypes.UPDATE_DATA, payload: { type, data: updatedData } })
      localStorage.setItem(`portfolio_${type}`, JSON.stringify(updatedData))
    },

    editItem: (type, index, updatedItem) => {
      console.log('Editing item in', type, 'at index', index, ':', updatedItem)
      const currentData = state.data[type]
      const firstKey = Object.keys(currentData)[0]
      const updatedArray = [...(currentData[firstKey] || [])]
      updatedArray[index] = updatedItem
      const updatedData = {
        ...currentData,
        [firstKey]: updatedArray
      }
      console.log('Updated data for', type, ':', updatedData)
      dispatch({ type: ActionTypes.UPDATE_DATA, payload: { type, data: updatedData } })
      localStorage.setItem(`portfolio_${type}`, JSON.stringify(updatedData))
    },

    deleteItem: (type, index) => {
      const currentData = state.data[type]
      const firstKey = Object.keys(currentData)[0]
      const updatedArray = [...(currentData[firstKey] || [])]
      updatedArray.splice(index, 1)
      const updatedData = {
        ...currentData,
        [firstKey]: updatedArray
      }
      dispatch({ type: ActionTypes.UPDATE_DATA, payload: { type, data: updatedData } })
      localStorage.setItem(`portfolio_${type}`, JSON.stringify(updatedData))
    },

    // UI state
    setActiveTab: (tab) => {
      dispatch({ type: ActionTypes.SET_ACTIVE_TAB, payload: tab })
    },

    setSidebarOpen: (open) => {
      dispatch({ type: ActionTypes.SET_SIDEBAR_OPEN, payload: open })
    },

    setEditingItem: (item) => {
      dispatch({ type: ActionTypes.SET_EDITING_ITEM, payload: item })
    },

    setEditingType: (type) => {
      dispatch({ type: ActionTypes.SET_EDITING_TYPE, payload: type })
    },

    setShowAddForm: (show) => {
      dispatch({ type: ActionTypes.SET_SHOW_ADD_FORM, payload: show })
    },

    setLoading: (loading) => {
      dispatch({ type: ActionTypes.SET_LOADING, payload: loading })
    },

    setError: (error) => {
      dispatch({ type: ActionTypes.SET_ERROR, payload: error })
    }
  }), [state.data]) // Only recreate when data changes

  const value = {
    ...state,
    ...actions
  }

  return (
    <AdminContext.Provider value={value}>
      {children}
    </AdminContext.Provider>
  )
}

// Custom hook to use admin context
export const useAdmin = () => {
  const context = useContext(AdminContext)
  if (!context) {
    throw new Error('useAdmin must be used within an AdminProvider')
  }
  return context
}

export default AdminContext
