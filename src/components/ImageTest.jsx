import React, { useState } from 'react'

const ImageTest = () => {
  const [image, setImage] = useState('')

  const handleImageUpload = (file) => {
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setImage(e.target.result)
        console.log('Image uploaded:', e.target.result.substring(0, 50) + '...')
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <h2>Image Upload Test</h2>
      
      <div style={{ marginBottom: '1rem' }}>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => handleImageUpload(e.target.files[0])}
          style={{ marginBottom: '1rem' }}
        />
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <h3>Image Data:</h3>
        <p>Has Image: {image ? 'Yes' : 'No'}</p>
        <p>Image Length: {image.length}</p>
        <p>Is Data URL: {image.startsWith('data:image/') ? 'Yes' : 'No'}</p>
        <p>Preview: {image.substring(0, 100)}...</p>
      </div>

      {image && (
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <img 
            src={image} 
            alt="Test" 
            style={{ width: '200px', height: '200px', objectFit: 'cover', border: '1px solid #ccc' }}
          />
          <button
            onClick={() => setImage('')}
            style={{
              position: 'absolute',
              top: '5px',
              right: '5px',
              background: 'red',
              color: 'white',
              border: 'none',
              borderRadius: '50%',
              width: '25px',
              height: '25px',
              cursor: 'pointer'
            }}
          >
            ×
          </button>
        </div>
      )}
    </div>
  )
}

export default ImageTest
