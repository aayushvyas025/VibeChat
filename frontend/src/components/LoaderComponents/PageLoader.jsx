import { MainLayout } from '../../layout'
import TextComponent from '../TypographyComponents/TextComponent'

function PageLoader() {
  return (
    <MainLayout>
        <TextComponent textType={"p"} text={"Loading..."} />
    </MainLayout>
  )
}

export default PageLoader