import "./footer.scss"

export default function Footer(){
    return(

        <>
            <div className="footer">
                <div className="footerWrapper">
                    <div className="head-text">
                        <div className="digi-text">DIGI<span className="change">NOMAD</span></div>
                        <div className="small-text">Follow us on social media</div>
                    </div>
                    <div className="soc-icons">
                        <div className="center">
                            <img src="assets/face.png" alt="Logo" className="icons"/>
                            <img src="assets/i1.png" alt="Logo" className="icons"/>
                            <img src="assets/twitr.png" alt="Logo" className="icons"/>
                            <img src="assets/link2.png" alt="Logo" className="icons"/>
                        </div>
                    </div>

                    <div className="copyright">
                        <span className="copy">&copy;Copyright DIGINOMAD.All Rights Reserved 2022</span>
                    </div>
                </div>
            </div>

        </>
    )
}