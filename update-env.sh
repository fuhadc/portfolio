#!/bin/bash

# ================================================================
# EmailJS Environment Variables Update Script
# ================================================================
# This script updates your .env file with EmailJS credentials
# ================================================================

echo "📧 EmailJS Configuration Update Script"
echo "========================================"
echo ""

# Define the credentials
SERVICE_ID="service_qpmysgb"
TEMPLATE_ID="template_9gbqy6j"
PUBLIC_KEY="w1-JxvmRCX8qn3X7l"

# Path to .env file
ENV_FILE=".env"

echo "✅ Credentials to be configured:"
echo "   Service ID:  $SERVICE_ID"
echo "   Template ID: $TEMPLATE_ID"
echo "   Public Key:  $PUBLIC_KEY"
echo ""

# Check if .env file exists
if [ ! -f "$ENV_FILE" ]; then
    echo "❌ Error: .env file not found!"
    echo "   Creating a new .env file..."
    touch "$ENV_FILE"
fi

# Function to update or add environment variable
update_env_var() {
    local key=$1
    local value=$2
    
    if grep -q "^${key}=" "$ENV_FILE"; then
        # Update existing variable
        if [[ "$OSTYPE" == "darwin"* ]]; then
            # macOS
            sed -i '' "s|^${key}=.*|${key}=${value}|" "$ENV_FILE"
        else
            # Linux
            sed -i "s|^${key}=.*|${key}=${value}|" "$ENV_FILE"
        fi
        echo "   ✓ Updated ${key}"
    else
        # Add new variable
        echo "${key}=${value}" >> "$ENV_FILE"
        echo "   ✓ Added ${key}"
    fi
}

echo "🔄 Updating .env file..."
echo ""

# Update all EmailJS variables
update_env_var "VITE_EMAILJS_SERVICE_ID" "$SERVICE_ID"
update_env_var "VITE_EMAILJS_TEMPLATE_ID" "$TEMPLATE_ID"
update_env_var "VITE_EMAILJS_PUBLIC_KEY" "$PUBLIC_KEY"

echo ""
echo "✅ Configuration Complete!"
echo ""
echo "📋 Next Steps:"
echo "   1. Verify your .env file (optional):"
echo "      cat .env | grep EMAILJS"
echo ""
echo "   2. Restart your development server:"
echo "      npm run dev"
echo ""
echo "   3. Test the contact form at:"
echo "      http://localhost:5173"
echo ""
echo "   4. Submit a test message and check:"
echo "      📧 fuhadcs@gmail.com"
echo ""
echo "🎉 Your contact form should now work!"
echo ""

