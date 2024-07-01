import styles from '@/styles/customText.module.css'

export default function Inputs_IconRight(props) {
    return (
        <div className="flex flex-col gap-1 items-start">
            <label htmlFor={props.id} className={styles.labels}>
                {props.label}
            </label>
            <div className="relative rounded-md shadow-sm">
                <input
                    type="text"
                    name={props.id}
                    id={props.id}
                    className="block w-full outline-none rounded-md border-0 py-1.5 pr-10 pl-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder={props.placeholder}
                />

                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 bg-bmo-blue rounded-r-md">
                    <span className="text-white sm:text-sm">{props.icon}</span>
                </div>
            </div>
        </div>
    )
}