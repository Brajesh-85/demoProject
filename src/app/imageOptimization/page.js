'use client'
import Image from "next/image"
import VercelProfile from "/public/vercel.svg"

console.log(VercelProfile)

const ImageOptimization = () => {
    return (
        <>
            <div className="container p-4">
                <div className="row">
                    <div className="col-12">
                        <h4>Image Optimization in Nextjs 13</h4>
                    </div>
                    <div className="col-12">
                        <Image src={VercelProfile}
                            alt="vercel logo"
                            width={200}
                            height={200}
                        />
                    </div>

                    <div className="col-12">
                        <Image src="https://media.cnn.com/api/v1/images/stellar/prod/230627162557-01-last-battle-american-revolutionary-war-india-intl-hnk-ml.jpg?c=16x9&q=h_720,w_1280,c_fill/f_webp"
                            alt="vercel logo"
                            width={1280}
                            height={720}
                            className="images2"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ImageOptimization;