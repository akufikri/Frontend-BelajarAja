
import video from '../assets/op-vid.mp4'

const CardInfo = () => {
      return (
            <div className="sm:flex gap-4 justify-center">
                  <div className="sm:max-w-5xl max-w-xl w-full p-4">
                        <div className="sm:h-96 h-48 rounded-md bg-gray-300 w-full">
                              <video className="w-full h-full object-cover rounded-lg" autoPlay loop muted>
                                    <source src={video} type="video/mp4" />
                              </video>
                        </div>
                  </div>
            </div>
      );
};

export default CardInfo;
