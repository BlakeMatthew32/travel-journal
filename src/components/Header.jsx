
/* need to add a callback func to allow this 
 to open the form for a new enter */

export default function Header({handleClick}) {

    return (
        <header className="header">
            <h3 className="header--title"><span className="header--title_icon">🌍</span>My Travel Journal</h3>
            <button className="btn btn_dark header--btn" onClick={handleClick} >Add a Journal entry</button>
        </header>
    )
}