{
  "manifest_version": 3,
  "name": "Shoefinder",
  "description": "Find the right shoe size when shopping online",
  "version": "1.0",
  "permissions": ["storage", "activeTab"],
  "action": {
    "default_popup": "popup/popup.html"
  },
  "background": {
    "service_worker": "background/background.js"
  },
  "content_scripts": [
    {
      "matches": ["<all_urls>"],
      "js": ["content/content.js"]
    }
  ]
}

