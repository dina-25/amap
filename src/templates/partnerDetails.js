import React from 'react'
import Layout from '../components/layoutDE'
import SEO from '../components/seo'
import { graphql, navigate} from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import articleStyles from '../styles/article.module.scss'

export const query = graphql`
query PartnerQueryDetail($mitglieder: String!)  {
    contentfulVollMitgliedsfirmen(mitglieder: {eq: $mitglieder}, node_locale: { eq: "de"}){

        node_locale
        mitglieder
        thumbnail {
          fluid{
            src
          }
        }
        image{
          file{
            url
          }
        }
        adress{
          json
        }
        link
          statement {
          json
        }
      }
    }
`

const PartnerDetails = (props) => {



    return (
      <Layout>
          <SEO title={props.data.contentfulVollMitgliedsfirmen.mitglieder}/>
        <div className={articleStyles.container}>
          <h1 className={articleStyles.titleStyle}>{props.data.contentfulVollMitgliedsfirmen.mitglieder}</h1>
          <div className={articleStyles.bodyStyle}>
            <a href={props.data.contentfulVollMitgliedsfirmen.image.file.url}>
              <img alt="" src={props.data.contentfulVollMitgliedsfirmen.thumbnail.fluid.src} className={articleStyles.imageStyle} />
            </a>
          </div>
          {documentToReactComponents(props.data.contentfulVollMitgliedsfirmen.statement.json)}
          <button onClick={() => { navigate(-1) }} className={articleStyles.buttonStyling}>Zurück</button>
      </div>
      </Layout>
    )
}

export default PartnerDetails
