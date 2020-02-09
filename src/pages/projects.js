import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import "typeface-noto-sans";

const IndexPage = () => (
  <Layout>
    <SEO title="Projects" />
    <h1 style={{textAlign:`center`, marginBottom: `60px`}}>Projects</h1>
    <div style={{ width: `90%`, margin: `auto auto`, height: 500, verticalAlign: `middle`}}>
        <ul>
            <li>
                <h3>PlayerApp</h3>
                <div style={{marginLeft: `30px`}}>
                    <p>
                        Music player for iOS and Android which offers users a highly-customizable listening experience.
                        With advanced features for file playback and library organization, this is a great option for
                        users with large music libraries.
                    </p>
                    <Link>PlayerApp Website</Link>
                </div>
            </li>
            <li>
                <h3>TR8 Controller</h3>
                <div style={{marginLeft: `30px`}}>
                    <p>
                        Audio Plugin Instrument for more advanced control and integration of the TR8 within a DAW.
                        Load user sample libraries for playback control from the TR8, including instrument control knobs.
                    </p>
                    <Link>TR8 Controller on Github</Link>
                </div>
            </li>
            <li>
                <h3>FREQ</h3>
                <div style={{marginLeft: `30px`}}>
                    <p>
                        A free plugin which offers unique ways to customize frequency modulation within delay lines.
                    </p>
                    <Link>Download FREQ</Link>
                </div>

                
            </li>
        </ul>
    </div>
  </Layout>
)

export default IndexPage
