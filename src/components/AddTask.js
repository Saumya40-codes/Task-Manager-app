import { useState } from 'react'

const AddTask = ({onAdd}) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder]= useState(false)
    const [associate, setAssociate] = useState('')

    const onSubmit = (e) =>{
        e.preventDefault()

        if(!text){
            alert('Please add a task')
            return
        }
        onAdd({text, associate, day, reminder})

        setText('')
        setDay('')
        setAssociate('')
        setReminder(false)
    }
  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
      <label>Task</label>
        <input type="text" placeholder="Add Task" value={text} onChange={(e) => setText(e.target.value)} />
      </div>
      <div className="form-control">
      <label>Task associated with?</label>
      <input type='text' placeholder='e.g. daily life, work, etc.' value={associate} onChange={(e) => setAssociate(e.target.value)} />
      </div>
      <div className="form-control">
      <label>Day & Time</label>
        <input type="text" placeholder="Add Day and Time"  value={day} onChange={(e) => setDay(e.target.value)}/>
      </div>
      <div className="form-control form-control-check">
      <label>Set Remider</label>
        <input type="checkbox"
         checked = {reminder}
         value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
      </div>
      <input type="submit" value="Save Task" className="btn btn-block" />
    </form>
  )
}

export default AddTask
