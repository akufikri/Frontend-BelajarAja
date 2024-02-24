import Benefits from "../components/Benefits";
import CardInfo from "../components/CardInfo";
import HeroSections from "../components/HeroSections";
import PreviewCourse from "../components/PreviewCourse";


const Beranda = () => {
      return (
            <div className="pt-20">
                  <HeroSections />
                  <CardInfo />
                  <Benefits />
                  <PreviewCourse />
            </div>
      )
}
export default Beranda;