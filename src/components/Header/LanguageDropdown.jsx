import { useState } from "react";

const languages = ["English", "Spanish", "Hindi"];

const LanguageDropdown = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-30 z-10"
        />
      )}

      <div className="relative inline-block z-20 min-w-[150px] font-bold text-[15px]">
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer flex items-center justify-between w-full px-6 py-2 text-white rounded-full text-[14px] font-semibold bg-transparent"
        >
          <span>{selectedLanguage}</span>
          <svg
            className="ml-2 shrink-0"
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 1L6 6L11 1" stroke="white" strokeWidth="1.5" />
          </svg>
        </div>

        {isOpen && (
          <div
            className="absolute mt-2 w-[200px] rounded-[16px] z-30 py-4"
            style={{
              background: "linear-gradient(167.8deg, #4100B4 0.5%, #1C004E 99.5%)",
              boxShadow: "0px 4px 40px 0px #FFFFFF40",
            }}
          >
            <p className="px-5 pb-3 text-white border-b border-white/20">Select Language</p>
            {languages.map((lang) => (
              <div
                key={lang}
                className="flex items-center justify-between px-5 py-2 text-white cursor-pointer hover:opacity-80"
                onClick={() => {
                  setSelectedLanguage(lang);
                  setIsOpen(false);
                }}
              >
                <span>{lang}</span>
                {selectedLanguage === lang && (
                  <svg
                    width="18"
                    height="13"
                    viewBox="0 0 18 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.70711 6.29289C1.31658 5.90237 0.683418 5.90237 0.292893 6.29289C-0.0976311 6.68342 -0.0976311 7.31658 0.292893 7.70711L5.29289 12.7071C5.68342 13.0976 6.31658 13.0976 6.70711 12.7071L17.7071 1.70711C18.0976 1.31658 18.0976 0.683418 17.7071 0.292893C17.3166 -0.0976311 16.6834 -0.0976311 16.2929 0.292893L6 10.5858L1.70711 6.29289Z"
                      fill="white"
                    />
                  </svg>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default LanguageDropdown;
