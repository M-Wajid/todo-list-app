import { useState } from "react";
import GenericTable from "../table";
import EditTask from "../editTask";
import DeleteTask from "../deleteTask.js";

const TodoList = (props) => {
  const { data, setData, task, setTask } = props;
  const [editShow, setEditShow] = useState();
  const [deleteShow, setDeleteShow] = useState();

  const tableHeading = [
    "name",
    "description",
    "dueDate",
    "status",
    "complexity",
    "actions",
  ];

  const handleEdit = (item) => {
    setEditShow(true);
    setTask(item);
    console.log(item);
  };

  const handleDelete = (item) => {
    setDeleteShow(true);
    setTask(item);
    console.log(item);
  };

  const actions = {
    edit: handleEdit,
    delete: handleDelete,
  };

  return (
    <>
      <EditTask
        show={editShow}
        setShow={setEditShow}
        data={data}
        setData={setData}
        task={task}
        setTask={setTask}
      />
      <DeleteTask
        show={deleteShow}
        setShow={setDeleteShow}
        data={data}
        setData={setData}
        task={task}
        setTask={setTask}
      />
      <GenericTable data={data} tableHeading={tableHeading} Actions={actions} />
    </>
  );
};

export default TodoList;
