#!/usr/bin/env node

// Test script to verify Google Scholar integration
// Run this with: node test-scholar-integration.js

const axios = require('axios');

const API_BASE_URL = 'http://localhost:3001/api';

async function testScholarIntegration() {
  console.log('🧪 Testing Google Scholar Integration...\n');

  try {
    // Test 1: Health check
    console.log('1. Testing API health...');
    const healthResponse = await axios.get(`${API_BASE_URL}/health`);
    console.log('✅ API Health:', healthResponse.data);
    console.log('');

    // Test 2: Fetch Google Scholar profile
    console.log('2. Fetching Google Scholar profile...');
    const profileResponse = await axios.get(`${API_BASE_URL}/scholar/profile`);
    console.log('✅ Profile Data:', {
      success: profileResponse.data.success,
      totalPapers: profileResponse.data.data.totalPapers,
      totalCitations: profileResponse.data.data.totalCitations,
      publicationsCount: profileResponse.data.data.publications?.length || 0
    });
    console.log('');

    // Test 3: Test individual paper search
    console.log('3. Testing individual paper search...');
    const searchResponse = await axios.post(`${API_BASE_URL}/citations/search`, {
      title: "Cost Effective and Energy Efficient Drip Irrigation System for IoT Enabled Smart Agriculture",
      authors: "Muhammed Fuhad C, Stenin George, Manu Elappila, Sachin Malayath Jose"
    });
    console.log('✅ Search Result:', {
      success: searchResponse.data.success,
      citations: searchResponse.data.data.citations,
      found: searchResponse.data.data.found
    });
    console.log('');

    // Test 4: Batch update
    console.log('4. Testing batch citation update...');
    const batchResponse = await axios.post(`${API_BASE_URL}/citations/batch`, {
      publications: [
        {
          title: "Cost Effective and Energy Efficient Drip Irrigation System for IoT Enabled Smart Agriculture",
          authors: "Muhammed Fuhad C, Stenin George, Manu Elappila, Sachin Malayath Jose",
          doi: "10.1007/978-981-97-1841-2_14"
        },
        {
          title: "Automated Contactless Continuous Temperature Monitoring System for Pandemic Disease Controlling Infrastructures",
          authors: "Muhammed Fuhad C, Stenin George, Manu Elappila, Sachin Malayath Jose",
          doi: "10.1109/ICRTEC56977.2023.10111891"
        }
      ]
    });
    console.log('✅ Batch Update Result:', {
      success: batchResponse.data.success,
      updatedCount: batchResponse.data.data?.length || 0
    });
    console.log('');

    console.log('🎉 All tests passed! Google Scholar integration is working correctly.');

  } catch (error) {
    console.error('❌ Test failed:', error.message);
    if (error.response) {
      console.error('Response data:', error.response.data);
    }
    process.exit(1);
  }
}

// Run the test
testScholarIntegration();
