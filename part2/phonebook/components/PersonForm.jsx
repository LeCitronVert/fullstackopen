const PersonForm = ({handleSubmit, handleNameChange, handlePhoneChange}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                name: <input required='required' onChange={handleNameChange} />
            </div>
            <div>
                phone : <input required='required' onChange={handlePhoneChange} />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default PersonForm;