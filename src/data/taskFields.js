export const fields = [
    {
      title: "Task Name",
      name: "name",
      type: "text",
      placeholder: "Task#1"
    },
    {
      title: "Task Description",
      name:"description",
      type:"text",
      placeholder:"Description"
    },
    {
      title: "Task Due Date",
      name:"dueDate",
      type:"date",
      min: new Date().toISOString().split("T")[0]
    },
    {
      title: "Task Status",
      type:"radio",
      options: [
        {
          name:"status",
          value:"Incomplete",
          label:"Incomplete"
        },
        {
          name:"status",
          value:"Completed",
          label:"Completed"
        }
      ]  
    },
    {
      title: "Task Complexity",
      name:"complexity",
      type:"select", 
      options: [
        {
          label:"Please Select Complexity"
        },
        {
          value:"High",
          label: "High"
        },
        {
          value:"Medium",
          label: "Medium"
        },
        {
          value:"Low",
          label: "Low"
        }
      ]  
    }
  ]