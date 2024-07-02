import styles from '@/styles/customText.module.css'

export default function Inputs_IconLeft(props) {
    return (
        <div className="flex flex-col gap-1 items-start">
            <label htmlFor={props.id} className={styles.labels}>
                {props.label}
            </label>
            <div className="relative rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-3 bg-bmo-blue rounded-l-md">
                    <span className="text-white sm:text-sm">{props.icon}</span>
                </div>
                <input
                    required
                    type="text"
                    name={props.id}
                    id={props.id}
                    className="block w-full outline-none rounded-md border-0 py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder={props.placeholder}
                />
            </div>
        </div>
    )
}