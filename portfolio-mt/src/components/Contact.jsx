function Contact() {
    return (
        <>
            <ul className="space-y-2">
                <li>
                    Email:{" "}
                    <a
                        href="mailto:exemple@domaine.com"
                        className="link link-primary"
                        target="_blank"
                        rel="noreferrer"
                    >
                        exemple@domaine.com
                    </a>
                </li>
                <li>
                    GitHub:{" "}
                    <a
                        href="https://github.com/votrenom"
                        className="link link-primary"
                        target="_blank"
                        rel="noreferrer"
                    >
                        github.com/votrenom
                    </a>
                </li>
                <li>
                    LinkedIn:{" "}
                    <a
                        href="https://linkedin.com/in/votrenom"
                        className="link link-primary"
                        target="_blank"
                        rel="noreferrer"
                    >
                        linkedin.com/in/votrenom
                    </a>
                </li>
            </ul>
        </>
    )
}

export default Contact;