

export default function NoLogs({handleClick}) {
    return (
        <div className="no_logs">
            <h1 className="no_logs--heading">It Seems your Journal is looking a bit bare!</h1>
            <button className="btn no_logs--btn" onClick={handleClick}>Add a Journal entry</button>
        </div>
    )
}