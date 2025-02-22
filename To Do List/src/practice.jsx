//Home
import React, { useState } from 'react';

function Home({ Notes, setNotes }) {
  
  function getPriorityColor(priority) {
    if (priority === "High") return "bg-red-500";
    if (priority === "Medium") return "bg-yellow-500";
    return "bg-green-500"; // Low Priority
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">📋 Your Tasks</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Notes.map((Task, index) => (
          <div key={index} className="p-4 bg-white shadow-lg rounded-lg border border-gray-300">
            
            <h2 className="text-xl font-semibold border-b pb-2">{Task.title}</h2>

            <p className="mt-2 text-gray-700">{Task.desc}</p>

            <div className="mt-2 text-sm text-gray-500">
              🕒 Due: {Task.datetime ? new Date(Task.datetime).toLocaleString() : "No Date Set"}
            </div>

            <span className={`px-3 py-1 text-white text-sm rounded-lg mt-3 inline-block ${getPriorityColor(Task.priority)}`}>
              🔥 {Task.priority || "Not Set"}
            </span>

            <span className="block text-sm text-gray-600 mt-2">🗂️ {Task.type || "No Category"}</span>

            <button
              onClick={() => handleEdit(index)}
              className="mt-3 mr-2 px-4 py-1 text-white rounded bg-blue-500 hover:bg-blue-600 transition-all"
            >
              {/* {editMode[index] ? 'Save' : 'Edit'} */}
              Edit
            </button>
            <button
              onClick={() => {}}
              className="mt-3 px-4 py-1 text-white rounded bg-blue-500 hover:bg-blue-600 transition-all"
            >
              {/* {editMode[index] ? 'Save' : 'Edit'} */}
              Mark As Completed
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
