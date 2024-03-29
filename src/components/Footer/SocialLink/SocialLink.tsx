import React from "react"

interface SocialLinkProps {
    link: string;
    name: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ link, name }) => {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
        >
            {name === "instagram" && (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 56.7 56.7"
                    width="18"
                    height="18"
                >
                    <g>
                        <path d="M28.2,16.7c-7,0-12.8,5.7-12.8,12.8s5.7,12.8,12.8,12.8S41,36.5,41,29.5S35.2,16.7,28.2,16.7z M28.2,37.7 c-4.5,0-8.2-3.7-8.2-8.2s3.7-8.2,8.2-8.2s8.2,3.7,8.2,8.2S32.7,37.7,28.2,37.7z"></path>
                        <circle
                            cx="41.5"
                            cy="16.4"
                            r="2.9"
                        ></circle>
                        <path d="M49,8.9c-2.6-2.7-6.3-4.1-10.5-4.1H17.9c-8.7,0-14.5,5.8-14.5,14.5v20.5c0,4.3,1.4,8,4.2,10.7c2.7,2.6,6.3,3.9,10.4,3.9 h20.4c4.3,0,7.9-1.4,10.5-3.9c2.7-2.6,4.1-6.3,4.1-10.6V19.3C53,15.1,51.6,11.5,49,8.9z M48.6,39.9c0,3.1-1.1,5.6-2.9,7.3 s-4.3,2.6-7.3,2.6H18c-3,0-5.5-0.9-7.3-2.6C8.9,45.4,8,42.9,8,39.8V19.3c0-3,0.9-5.5,2.7-7.3c1.7-1.7,4.3-2.6,7.3-2.6h20.6 c3,0,5.5,0.9,7.3,2.7c1.7,1.8,2.7,4.3,2.7,7.2V39.9L48.6,39.9z"></path>
                    </g>
                </svg>
            )}
            {name === "behance" && (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 56.693 56.693"
                    width="18"
                    height="18"
                >
                    <g>
                        <path d="M22.953,29.766c0,0,5.292-0.394,5.292-6.6c0-6.208-4.33-9.238-9.816-9.238H8.332H8.036H0.378v34.691h7.658h0.296H18.43 c0,0,11.019,0.348,11.019-10.24C29.448,38.378,29.93,29.766,22.953,29.766z M8.332,20.093h8.798h1.299c0,0,2.454,0,2.454,3.608 c0,3.61-1.444,4.134-3.08,4.134H8.331v-7.742H8.332z M17.919,42.452c-0.267,0.007-0.493,0-0.645,0H8.332v-9.27H18.43 c0,0,3.658-0.048,3.658,4.762C22.087,42.004,19.355,42.422,17.919,42.452z"></path>
                        <path d="M44.147,22.753c-13.341,0-13.329,13.329-13.329,13.329s-0.914,13.261,13.329,13.261c0,0,11.871,0.678,11.871-9.226h-6.106 c0,0,0.203,3.731-5.563,3.731c0,0-6.104,0.406-6.104-6.038h17.975C56.22,37.81,58.188,22.753,44.147,22.753z M38.177,33.182 c0,0,0.745-5.347,6.104-5.347c5.361,0,5.29,5.347,5.29,5.347H38.177z"></path>
                        <rect
                            x="36.685"
                            y="15.97"
                            width="14.31"
                            height="4.272"
                        ></rect>
                    </g>
                </svg>
            )}
            {name === "linkedin" && (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 56.693 56.693"
                    width="18"
                    height="18"
                >
                    <g>
                        <path d="M42.589,50.212V32.686c0,0-0.956-3.664-4.461-3.505c-3.505,0.159-4.62,0.717-6.214,2.629v18.402h-9.002 V22.409h8.922v4.063c0,0,2.868-5.656,8.922-5.258c5.497,0.398,9.639,3.744,10.515,11.073h0.239v17.924H42.589z M12.238,18.825 c-2.948,0-5.337-2.39-5.337-5.417c0-2.948,2.39-5.417,5.337-5.417s5.337,2.39,5.337,5.417 C17.575,16.355,15.185,18.825,12.238,18.825z M16.699,50.212H7.777V22.409h8.922V50.212z"></path>
                    </g>
                </svg>
            )}
        </a>
    )
}

export default SocialLink
