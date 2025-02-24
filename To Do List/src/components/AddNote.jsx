import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { addNote } from '../features/notes';
import { useDispatch } from 'react-redux';

function AddNote() {
  const dispatch = useDispatch()

  const [formData, setFormData] = useState({
    title: '',
    desc: '',
    datetime: null,
    priority: '',
    type: '',
  });

  const [errors, setErrors] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function validate() {
    const errors = {};
    if (!formData.title.trim()) errors.title = 'Title is mandatory';
    if (!formData.desc.trim()) errors.desc = 'Description is mandatory';
    if (!formData.datetime) errors.datetime = 'Date Time is mandatory';
    if (!formData.priority) errors.priority = 'Priority is not set';
    if (!formData.type) errors.type = 'Category is not set';
    return errors;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const validateFields = validate();
    setErrors(validateFields);
    if (Object.keys(validateFields).length === 0) {
      setErrors({});
      const noteWithId = { ...formData, id: uuidv4() }; // assign id here
      dispatch(addNote(noteWithId));
      setFormData({
        title: '',
        desc: '',
        datetime: null,
        priority: '',
        type: '',
      });
      alert("Note Added")
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-green-100 to-green-200">
      <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-lg border border-green-300">
        <h2 className="text-2xl font-semibold text-green-900 mb-4 text-center">Add New Note 🌿</h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <div>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Title..."
              className="w-full px-4 py-2 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none transition-all duration-200"
            />
            {errors.title && <p className="text-red-600 text-sm mt-1">{errors.title}</p>}
          </div>

          <div>
            <textarea
              name="desc"
              value={formData.desc}
              onChange={handleChange}
              placeholder="Description..."
              className="w-full px-4 py-2 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none transition-all duration-200"
            />
            {errors.desc && <p className="text-red-600 text-sm mt-1">{errors.desc}</p>}
          </div>

          <div>
            <input
              type="datetime-local"
              name="datetime"
              value={formData.datetime || ''}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none transition-all duration-200"
            />
            {errors.datetime && <p className="text-red-600 text-sm mt-1">{errors.datetime}</p>}
          </div>

          <div>
            <h3 className="text-green-800 font-medium mb-1">Priority:</h3>
            <div className="flex gap-4">
              {['Low', 'Medium', 'High'].map((value) => (
                <label key={value} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="priority"
                    value={value}
                    onChange={handleChange}
                    checked={formData.priority === value}
                    className="h-4 w-4 text-green-500 focus:ring-green-400 transition-all"
                  />
                  <span className="text-green-700">{value}</span>
                </label>
              ))}
            </div>
            {errors.priority && <p className="text-red-600 text-sm mt-1">{errors.priority}</p>}
          </div>

          <div>
            <select
              name="type"
              id="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none transition-all duration-200"
            >
              {['', 'Work', 'Personal', 'Study'].map((value) => (
                <option key={value} value={value}>
                  {value || 'Select Category'}
                </option>
              ))}
            </select>
            {errors.type && <p className="text-red-600 text-sm mt-1">{errors.type}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 shadow-md transform hover:scale-105 transition-all duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddNote;
