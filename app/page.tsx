'use client'

import { useState } from 'react'
import { QRCodeSVG } from 'qrcode.react'

export default function Home() {
  const [twitterHandle, setTwitterHandle] = useState('')
  const [hashtag, setHashtag] = useState('')
  
  const isValidHandle = twitterHandle.length > 0
  const twitterUrl = hashtag 
    ? `https://twitter.com/intent/tweet?text=@${twitterHandle}&hashtags=${hashtag.replace('#', '')}`
    : `https://twitter.com/intent/tweet?text=@${twitterHandle}`

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-100">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Twitter QR Generator
          </h1>
          <p className="text-gray-600">
            Enter your Twitter handle and optional hashtag to generate a QR code
          </p>
        </div>
        
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Enter Twitter handle (without @)"
            value={twitterHandle}
            onChange={(e) => setTwitterHandle(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          
          <input
            type="text"
            placeholder="Enter hashtag (optional)"
            value={hashtag}
            onChange={(e) => setHashtag(e.target.value.startsWith('#') ? e.target.value : `#${e.target.value}`)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {isValidHandle && (
          <div className="flex justify-center mt-8">
            <QRCodeSVG
              value={twitterUrl}
              size={256}
              bgColor="#ffffff"
              fgColor="#000000"
              level="L"
              includeMargin={false}
            />
          </div>
        )}
      </div>
    </main>
  )
}