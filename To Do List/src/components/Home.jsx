import DialogueBox from './DialogueBox';
import { useDispatch, useSelector } from 'react-redux';
import { setCanEdit, removeCompleted } from '../features/notes';
import Swal from 'sweetalert2'

function Home() {
  const Notes = useSelector((state) => state.notes)
  const dispatch = useDispatch()

  function getPriorityColor(priority) {
    if (priority === "High") return "bg-red-500";
    if (priority === "Medium") return "bg-yellow-500";
    return "bg-green-500"; // Low Priority
  }

  function handleEdit(NoteId) {
    dispatch(setCanEdit(NoteId))
  }

  function handleCompleted(NoteId) {
    Swal.fire({
      title: "Are you sure?",
      text: "Did you really complete the task",
      iconColor: 'green',
      confirmButtonColor: 'green',
      icon: "warning",
      showCancelButton: true,
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, done👍!"
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(removeCompleted(NoteId))
        Swal.fire({
          position: 'center',
          iconColor: 'green',
          confirmButtonColor: 'green',
          icon: "success",
          title: "Great👍!",
          text: "Task has been marked as completed.",
          showConfirmButton: false,
          timer: 1500
        });
      }
    });
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">📋 Your Tasks</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
        {
          Notes.map((Note) =>
            Note.canEdit && <DialogueBox key={Note.id} NoteId={Note.id} Task={Note} handleEdit={handleEdit} />
          )
        }
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
              onClick={() => handleEdit(Task.id)}
              className="mt-3 mr-2 px-4 py-1 text-white rounded bg-blue-500 hover:bg-blue-600 transition-all"
            >
              Edit
            </button>
            <button
              onClick={() => { handleCompleted(Task.id) }}
              className="mt-3 px-4 py-1 text-white rounded bg-blue-500 hover:bg-blue-600 transition-all"
            >
              Mark As Completed
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}


export default Home;
