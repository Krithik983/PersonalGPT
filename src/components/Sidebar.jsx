import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div
      className="d-flex flex-column p-3 text-bg-dark sidebar"
      style={{ width: "340px", height: "910px" }}
    >
      <button className="add-chat">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          class="bi bi-plus"
          viewBox="0 0 16 16"
        >
          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
        </svg>
        New Chat
      </button>
    </div>
  );
};

export default Sidebar;
