export default function Button({text, extraStyles}) {
    return <button type="button" className={`text-white ${extraStyles ? extraStyles : 'bg-softBlue to-darkBlue' }  hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-3 text-center`}>
        {text}</button>
}


