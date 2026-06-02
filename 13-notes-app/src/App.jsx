import React, { useState } from 'react'

const COLORS = [
  { bg: '#fef08a', shadow: '#ca8a04' },
  { bg: '#86efac', shadow: '#16a34a' },
  { bg: '#93c5fd', shadow: '#2563eb' },
  { bg: '#f9a8d4', shadow: '#db2777' },
  { bg: '#fdba74', shadow: '#ea580c' },
  { bg: '#c4b5fd', shadow: '#7c3aed' },
]

const PinIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 2C10.34 2 9 3.34 9 5c0 .96.43 1.82 1.1 2.4L9 14H7l-2 2h6v5l1 1 1-1v-5h6l-2-2h-2l-1.1-6.6C14.57 6.82 15 5.96 15 5c0-1.66-1.34-3-3-3z"/>
  </svg>
)

const TrashIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
    <polyline points="3 6 5 6 21 6"/>
    <path d="M19 6l-1 14H6L5 6"/>
    <path d="M10 11v6M14 11v6"/>
    <path d="M9 6V4h6v2"/>
  </svg>
)

export default function App() {
  const [title, setTitle] = useState('')
  const [detail, setDetail] = useState('')
  const [tasks, setTasks] = useState([])
  const [colorIdx, setColorIdx] = useState(0)
  const [hoveredIdx, setHoveredIdx] = useState(null)

  const submitHandler = (e) => {
    e.preventDefault()
    if (!title.trim()) return
    setTasks([...tasks, { title, detail, colorIdx }])
    setTitle('')
    setDetail('')
    setColorIdx((colorIdx + 1) % COLORS.length)
  }

  const deleteNote = (idx) => {
    const copy = [...tasks]
    copy.splice(idx, 1)
    setTasks(copy)
  }

  return (
    <div style={{ fontFamily: "'Nunito', sans-serif", minHeight: '100vh', background: '#111', color: '#fff' }}>
      <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=Caveat:wght@600;700&display=swap" rel="stylesheet" />

      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #111; }

        .app-wrapper {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        /* Header */
        .header {
          padding: 20px 24px 0;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .header-title {
          font-family: 'Caveat', cursive;
          font-size: 2rem;
          font-weight: 700;
          color: #fef08a;
          letter-spacing: 1px;
        }

        /* Layout */
        .main-layout {
          display: flex;
          flex-direction: column;
          flex: 1;
          gap: 0;
        }

        @media (min-width: 1024px) {
          .main-layout {
            flex-direction: row;
            height: calc(100vh - 64px);
          }
          .form-panel {
            width: 380px;
            min-width: 340px;
            border-right: 1px solid #222;
            overflow-y: auto;
          }
          .notes-panel {
            flex: 1;
            overflow-y: auto;
          }
        }

        /* Form Panel */
        .form-panel {
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .panel-label {
          font-size: 0.7rem;
          font-weight: 800;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #555;
          margin-bottom: 4px;
        }

        .form-title {
          font-family: 'Caveat', cursive;
          font-size: 1.8rem;
          font-weight: 700;
          color: #fff;
        }

        .input-group {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .input-label {
          font-size: 0.72rem;
          font-weight: 700;
          color: #666;
          letter-spacing: 1.5px;
          text-transform: uppercase;
        }
        .styled-input, .styled-textarea {
          background: #1a1a1a;
          border: 1.5px solid #2a2a2a;
          color: #fff;
          border-radius: 10px;
          padding: 12px 16px;
          font-family: 'Nunito', sans-serif;
          font-size: 0.95rem;
          font-weight: 600;
          outline: none;
          transition: border-color 0.2s, background 0.2s;
          width: 100%;
          resize: none;
        }
        .styled-input::placeholder, .styled-textarea::placeholder { color: #444; }
        .styled-input:focus, .styled-textarea:focus {
          border-color: #fef08a;
          background: #1e1e16;
        }
        .styled-textarea { height: 110px; }

        /* Color picker */
        .color-row {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }
        .color-dot {
          width: 26px; height: 26px;
          border-radius: 50%;
          cursor: pointer;
          border: 3px solid transparent;
          transition: transform 0.15s, border-color 0.15s;
        }
        .color-dot:hover { transform: scale(1.2); }
        .color-dot.selected { border-color: #fff; transform: scale(1.15); }

        /* Submit Button */
        .add-btn {
          background: #fef08a;
          color: #111;
          font-family: 'Nunito', sans-serif;
          font-weight: 800;
          font-size: 0.95rem;
          border: none;
          border-radius: 10px;
          padding: 13px 24px;
          cursor: pointer;
          letter-spacing: 0.5px;
          transition: transform 0.15s, background 0.15s, box-shadow 0.15s;
          box-shadow: 0 4px 0 #ca8a04;
        }
        .add-btn:hover { background: #fde047; transform: translateY(-1px); box-shadow: 0 5px 0 #ca8a04; }
        .add-btn:active { transform: translateY(2px); box-shadow: 0 2px 0 #ca8a04; }

        /* Divider */
        .divider {
          border: none;
          border-top: 1px solid #222;
          margin: 4px 0;
        }

        /* Notes Panel */
        .notes-panel {
          padding: 24px;
        }
        .notes-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
        }
        .notes-title {
          font-family: 'Caveat', cursive;
          font-size: 1.6rem;
          color: #aaa;
        }
        .notes-count {
          font-size: 0.75rem;
          font-weight: 800;
          color: #444;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        /* Notes Grid */
        .notes-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
          gap: 16px;
        }

        @media (min-width: 480px) {
          .notes-grid { grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); }
        }

        /* Note Card */
        .note-card {
          position: relative;
          border-radius: 4px 12px 12px 12px;
          padding: 14px 14px 12px;
          min-height: 180px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          cursor: default;
          transition: transform 0.2s, box-shadow 0.2s;
          overflow: hidden;
        }
        .note-card:hover {
          transform: translateY(-4px) rotate(0.5deg);
        }

        /* Folded corner */
        .note-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 0; height: 0;
          border-style: solid;
          border-width: 22px 22px 0 0;
          border-color: rgba(0,0,0,0.15) transparent transparent transparent;
        }

        /* Pin */
        .note-pin {
          position: absolute;
          top: -8px;
          left: 50%;
          transform: translateX(-50%);
          color: #555;
          filter: drop-shadow(0 2px 2px rgba(0,0,0,0.3));
        }

        /* Lines background on card */
        .note-lines {
          position: absolute;
          inset: 0;
          background-image: repeating-linear-gradient(
            transparent,
            transparent 23px,
            rgba(0,0,0,0.06) 24px
          );
          border-radius: 4px 12px 12px 12px;
          pointer-events: none;
        }

        .note-content { position: relative; z-index: 1; flex: 1; }
        .note-title {
          font-family: 'Caveat', cursive;
          font-size: 1.2rem;
          font-weight: 700;
          color: #111;
          line-height: 1.3;
          margin-bottom: 6px;
          word-break: break-word;
        }
        .note-detail {
          font-size: 0.78rem;
          font-weight: 600;
          color: #333;
          line-height: 1.5;
          word-break: break-word;
        }

        .note-footer {
          position: relative;
          z-index: 1;
          display: flex;
          justify-content: flex-end;
          margin-top: 10px;
        }
        .delete-btn {
          background: rgba(0,0,0,0.12);
          border: none;
          border-radius: 6px;
          padding: 5px 7px;
          cursor: pointer;
          color: #444;
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 0.7rem;
          font-weight: 700;
          font-family: 'Nunito', sans-serif;
          transition: background 0.15s, color 0.15s;
        }
        .delete-btn:hover { background: rgba(0,0,0,0.25); color: #111; }

        /* Empty state */
        .empty-state {
          grid-column: 1 / -1;
          text-align: center;
          padding: 60px 20px;
          color: #333;
        }
        .empty-icon {
          font-family: 'Caveat', cursive;
          font-size: 4rem;
          margin-bottom: 12px;
          opacity: 0.4;
        }
        .empty-text {
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
        }
      `}</style>

      <div className="app-wrapper">
        {/* Header */}
        <div className="header">
          <span style={{ fontSize: '1.6rem' }}>📌</span>
          <span className="header-title">StickyNotes</span>
        </div>

        <div className="main-layout">
          {/* Form Panel */}
          <div className="form-panel">
            <div>
              <div className="panel-label">New Note</div>
              <div className="form-title">Write it down</div>
            </div>

            <hr className="divider" />

            <form onSubmit={submitHandler} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div className="input-group">
                <label className="input-label">Title</label>
                <input
                  className="styled-input"
                  type="text"
                  placeholder="What's on your mind?"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              <div className="input-group">
                <label className="input-label">Details</label>
                <textarea
                  className="styled-textarea"
                  placeholder="Add more details here..."
                  value={detail}
                  onChange={(e) => setDetail(e.target.value)}
                />
              </div>

              <div className="input-group">
                <label className="input-label">Color</label>
                <div className="color-row">
                  {COLORS.map((c, i) => (
                    <div
                      key={i}
                      className={`color-dot${colorIdx === i ? ' selected' : ''}`}
                      style={{ background: c.bg }}
                      onClick={() => setColorIdx(i)}
                    />
                  ))}
                </div>
              </div>

              <button type="submit" className="add-btn">+ Add Note</button>
            </form>
          </div>

          {/* Notes Panel */}
          <div className="notes-panel">
            <div className="notes-header">
              <div className="notes-title">Your Notes</div>
              <div className="notes-count">{tasks.length} note{tasks.length !== 1 ? 's' : ''}</div>
            </div>

            <div className="notes-grid">
              {tasks.length === 0 ? (
                <div className="empty-state">
                  <div className="empty-icon">📋</div>
                  <div className="empty-text">No notes yet</div>
                </div>
              ) : (
                tasks.map((task, idx) => {
                  const col = COLORS[task.colorIdx ?? 0]
                  return (
                    <div
                      key={idx}
                      className="note-card"
                      style={{
                        background: col.bg,
                        boxShadow: `3px 4px 0px ${col.shadow}55, 0 8px 24px rgba(0,0,0,0.4)`,
                        transform: `rotate(${(idx % 3 - 1) * 1.2}deg)`,
                      }}
                      onMouseEnter={() => setHoveredIdx(idx)}
                      onMouseLeave={() => setHoveredIdx(null)}
                    >
                      <div className="note-pin"><PinIcon /></div>
                      <div className="note-lines" />
                      <div className="note-content">
                        <div className="note-title">{task.title}</div>
                        {task.detail && <div className="note-detail">{task.detail}</div>}
                      </div>
                      <div className="note-footer">
                        <button className="delete-btn" onClick={() => deleteNote(idx)}>
                          <TrashIcon /> Delete
                        </button>
                      </div>
                    </div>
                  )
                })
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}