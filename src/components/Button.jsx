function Button({ onClickHandler, children }) {
    return (
        <button
            className="h-8 w-8 p-5 flex justify-center items-center border border-[#c4c4c4] rounded-md hover:bg-[#c7c7c7]"
            onClick={onClickHandler}
        >
            {children}
        </button>
    );
}

export default Button;
