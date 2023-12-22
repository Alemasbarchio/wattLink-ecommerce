import logo from '../../assets/img/logo-eletrica.png';
interface LoadingProps {
  loading: boolean;
}

const Loading= ({ loading }:LoadingProps) => {
  return (
    <>
      {loading && (
        <div>
        <div className="w-full h-screen bg-slate-700 opacity-50 fixed top-0 left-0 flex items-center justify-center">
          <div className="rounded-full w-20 h-20 border-b-4 border-green-600 animate-spin">
          
          </div>
          <img
              src={logo}
              alt="Carregando..."
              className="w-12 h-12 absolute"
            />
        </div>
        </div>
      )}
    </>
  );
};

export { Loading };
