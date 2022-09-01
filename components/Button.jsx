export default function Button({text}) {
    return <button type="button" className="text-white bg-gradient-to-r from-gold to-orange hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-8 py-4 text-center mr-2">{text}</button>
}