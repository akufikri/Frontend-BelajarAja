import { Card } from 'flowbite-react';

const CardInfo = () => {
      return (
            <div className="sm:flex gap-4 justify-center mt-12"> {/* Added margin */}
                  <Card href="#" className="max-w-sm w-full p-4 rounded-2xl bg-gradient-to-r from-sky-400 to-indigo-500 shadow-md text-white">
                        <i className="fa-light fa-users text-3xl"></i>
                        <h5 className="text-xl font-semibold mt-2 mb-1">
                              Komunitas Belajar
                        </h5>
                        <p>Terhubung dengan pelajar lain dan saling memotivasi.</p>
                  </Card>
                  <Card href="#" className="max-w-sm w-full p-4 rounded-2xl bg-gradient-to-r from-teal-400 to-cyan-500 shadow-md text-white">
                        <i className="fa-light fa-video text-3xl"></i>
                        <h5 className="text-xl font-semibold mt-2 mb-1">
                              Materi Video
                        </h5>
                        <p>Belajar secara visual dengan video yang mudah dipahami.</p>
                  </Card>
                  <Card href="#" className="max-w-sm w-full p-4 rounded-2xl bg-gradient-to-r from-amber-400 to-orange-500 shadow-md text-white">
                        <i className="fa-light fa-user-tie text-3xl"></i>
                        <h5 className="text-xl font-semibold mt-2 mb-1">
                              Mentor Profesional
                        </h5>
                        <p>Dapatkan bimbingan dari instruktur berpengalaman.</p>
                  </Card>
            </div>
      );
};

export default CardInfo;
