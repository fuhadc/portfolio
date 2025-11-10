import React from 'react'

const EnvTest = () => {
  const envVars = {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  }

  const allEnvVars = import.meta.env

  return (
    <div style={{
      padding: '40px',
      fontFamily: 'monospace',
      maxWidth: '800px',
      margin: '0 auto'
    }}>
      <h1 style={{ marginBottom: '20px' }}>🔍 Environment Variables Test</h1>
      
      <div style={{
        background: '#f8fafc',
        padding: '20px',
        borderRadius: '8px',
        marginBottom: '20px',
        border: '2px solid #e2e8f0'
      }}>
        <h2 style={{ marginBottom: '15px' }}>EmailJS Credentials:</h2>
        
        <div style={{ marginBottom: '10px' }}>
          <strong>Service ID:</strong>
          <div style={{
            padding: '10px',
            background: envVars.serviceId ? '#dcfce7' : '#fee2e2',
            borderRadius: '4px',
            marginTop: '5px'
          }}>
            {envVars.serviceId ? (
              <>✅ Loaded: {envVars.serviceId}</>
            ) : (
              <>❌ Missing</>
            )}
          </div>
        </div>

        <div style={{ marginBottom: '10px' }}>
          <strong>Template ID:</strong>
          <div style={{
            padding: '10px',
            background: envVars.templateId ? '#dcfce7' : '#fee2e2',
            borderRadius: '4px',
            marginTop: '5px'
          }}>
            {envVars.templateId ? (
              <>✅ Loaded: {envVars.templateId}</>
            ) : (
              <>❌ Missing</>
            )}
          </div>
        </div>

        <div style={{ marginBottom: '10px' }}>
          <strong>Public Key:</strong>
          <div style={{
            padding: '10px',
            background: envVars.publicKey ? '#dcfce7' : '#fee2e2',
            borderRadius: '4px',
            marginTop: '5px'
          }}>
            {envVars.publicKey ? (
              <>✅ Loaded: {envVars.publicKey}</>
            ) : (
              <>❌ Missing</>
            )}
          </div>
        </div>
      </div>

      <div style={{
        background: '#fffbeb',
        padding: '20px',
        borderRadius: '8px',
        marginBottom: '20px',
        border: '2px solid #fbbf24'
      }}>
        <h2 style={{ marginBottom: '15px' }}>Status:</h2>
        {envVars.serviceId && envVars.templateId && envVars.publicKey ? (
          <div style={{ color: '#059669', fontSize: '18px', fontWeight: 'bold' }}>
            ✅ All credentials loaded! Contact form should work.
          </div>
        ) : (
          <div>
            <div style={{ color: '#dc2626', fontSize: '18px', fontWeight: 'bold', marginBottom: '15px' }}>
              ❌ Missing credentials! Contact form will NOT work.
            </div>
            <div style={{ fontSize: '14px', lineHeight: '1.8' }}>
              <strong>To Fix:</strong>
              <br />1. Go to Vercel Dashboard → Your Project
              <br />2. Settings → Environment Variables
              <br />3. Add missing variables
              <br />4. Redeploy the site
            </div>
          </div>
        )}
      </div>

      <div style={{
        background: '#f1f5f9',
        padding: '20px',
        borderRadius: '8px',
        border: '2px solid #cbd5e1'
      }}>
        <h2 style={{ marginBottom: '15px' }}>All Environment Variables:</h2>
        <pre style={{
          background: '#1e293b',
          color: '#e2e8f0',
          padding: '15px',
          borderRadius: '4px',
          overflow: 'auto',
          fontSize: '12px'
        }}>
          {JSON.stringify(allEnvVars, null, 2)}
        </pre>
      </div>

      <div style={{
        background: '#eff6ff',
        padding: '20px',
        borderRadius: '8px',
        marginTop: '20px',
        border: '2px solid #93c5fd'
      }}>
        <h3 style={{ marginBottom: '10px' }}>📝 Instructions:</h3>
        <ol style={{ lineHeight: '2', paddingLeft: '20px' }}>
          <li>Check if all three credentials show "✅ Loaded"</li>
          <li>If any show "❌ Missing", add them to Vercel</li>
          <li>After adding, redeploy and refresh this page</li>
          <li>Once all show green, go to Contact page and test</li>
        </ol>
      </div>
    </div>
  )
}

export default EnvTest

