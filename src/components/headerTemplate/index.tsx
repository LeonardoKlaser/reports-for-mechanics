/* eslint-disable */
const HeaderTemplate = () => {
    return (
      <html>
        <head>
          <script src="https://cdn.tailwindcss.com"></script>
        </head>
        <body>
            <div className="relative w-full h-[100px] bg-white flex items-center px-4">
                {/* Faixa diagonal */}
                <div className="absolute top-0 left-0 w-full h-full bg-blue-900" style={{
                    clipPath: "polygon(0% 0%, 65% 0%, 50% 100%, 0% 100%)"
                }}></div>

                {/* Texto no lado esquerdo */}
                <div className="relative text-white text-xl font-semibold italic ml-6">
                    VISTORIA CAUTELAR V2
                </div>

                {/* Logo no lado direito */}
                <div className="relative ml-auto mr-6">
                    <img src="https://img.freepik.com/vetores-premium/design-de-logotipo-de-produtos-de-alta-qualidader_984027-135394.jpg?" alt="Super Visão" className="w-[270px] h-[100px] object-cover" />
                </div>
            </div>
        </body>
      </html>
    );
  };
  
  export default HeaderTemplate;