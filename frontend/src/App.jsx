import { useState } from "react";
import SearchBar from "./components/SearchBar";
import StatusFilter from "./components/StatusFilter";
import TaskTable from "./components/TaskTable";
import { useTasks } from "./hooks/useTasks";

export default function App() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const { tasks, total, loading, error } = useTasks(
    query,
    status,
    page,
    pageSize,
  );

  const totalPages = Math.ceil(total / pageSize);
  const startResult = total === 0 ? 0 : (page - 1) * pageSize + 1;
  const endResult = Math.min(page * pageSize, total);

  return (
    <div className="app">
      <header className="app-header">
        <h1>Task Tracker</h1>
        <p className="subtitle">Internal task management</p>
      </header>

      <div className="controls">
        <SearchBar
          value={query}
          onChange={(value) => {
            setQuery(value);
            setPage(1);
          }}
        />

        <div className="control-group">
          <span>Status:</span>
          <StatusFilter
            value={status}
            onChange={(value) => {
              setStatus(value);
              setPage(1);
            }}
          />
        </div>

        <div className="control-group">
          <span>Results:</span>
          <select
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
              setPage(1);
            }}
          >
            {[10, 20, 50, 100].map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>
      </div>
      <TaskTable tasks={tasks} loading={loading} error={error} />

      {total > 0 && (
        <div className="pagination">
          <span className="result-count">
            Showing {startResult}-{endResult} of {total}
          </span>

          {totalPages > 1 && (
            <>
              <button
                disabled={page <= 1}
                onClick={() => setPage((p) => p - 1)}
              >
                Previous
              </button>

              <span>
                Page {page} of {totalPages}
              </span>

              <button
                disabled={page >= totalPages}
                onClick={() => setPage((p) => p + 1)}
              >
                Next
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}
