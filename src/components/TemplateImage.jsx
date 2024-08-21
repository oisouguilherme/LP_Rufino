"use client";

import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import html2canvas from "html2canvas";
import Image from "next/image";
import FotoRufino from "../assets/templates/rufino.jpg";
import FotoTemplate from "../assets/templates/template.png";
import FotoResult from "../assets/templates/result.png";
import { TitleSection } from "./Utils";

export function TemplateImage() {
  const [uploadedImage, setUploadedImage] = useState(null);
  const overlayImage = "/template.png";

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/jpeg, image/png, image/jpg",
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles[0];
      const reader = new FileReader();
      reader.onload = () => setUploadedImage(reader.result);
      reader.readAsDataURL(file);
    },
  });

  const handleDownload = () => {
    const element = document.getElementById("canvas-container");

    const scale = 1080 / 320; // 1080px final dividido pela dimensão original de 320px

    const width = element.offsetWidth;
    const height = element.offsetHeight;

    // Crie um canvas de 1080x1080
    const canvas = document.createElement("canvas");
    canvas.width = width * scale; // 320 * 3.375 = 1080
    canvas.height = height * scale;

    const context = canvas.getContext("2d");
    context.scale(scale, scale); // Escala o contexto

    // Capturar o conteúdo do container com html2canvas
    html2canvas(element, {
      canvas: canvas,
      useCORS: true,
      backgroundColor: null, // Remove fundo branco
      scale: 1, // Mantém a escala 1, já que manualmente escalamos o contexto
    }).then((canvas) => {
      const link = document.createElement("a");
      link.download = "eu-apoio-rufino.png";
      link.href = canvas.toDataURL("image/png", 1.0);
      link.click();
    });
  };

  return (
    <div>
      <div className="max-w-6xl mx-auto py-20 text-center px-4">
        <div className="space-y-2">
          <h2 className="text-4xl md:text-5xl font-medium">
            Estamos juntos com <b className="text-blue-600">Rufino Folador</b>
          </h2>
          <p>
            Apoie essa campanha personalizando seu avatar nas redes sociais!
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-5 pt-16">
          <Image
            src={FotoRufino}
            className="w-72 h-72 object-cover rounded-full"
          />
          <span className="font-bold text-8xl text-orange-400">+</span>
          <Image src={FotoTemplate} className="w-72 h-72 object-cover" />
          <span className="font-bold text-8xl text-orange-400">=</span>
          <Image src={FotoResult} className="w-72 h-72 object-cover" />
        </div>
      </div>

      <div className="bg-blue-600">
        <div className="grid md:grid-cols-2 items-center max-w-6xl px-4 mx-auto py-20 text-white space-y-5 md:space-y-0">
          <div>
            <h3 className="text-5xl md:text-6xl font-bold">
              Personalize <br /> sua foto
            </h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="hidden md:block"
              width="48"
              height="48"
              fill="#fb923c"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
              />
            </svg>
          </div>
          <div className="mx-auto">
            {!uploadedImage && (
              <div className="space-y-3">
                <span className="font-medium">
                  Envie sua foto <span className="text-orange-400">*</span>
                </span>
                <div
                  className="bg-white text-zinc-400 text-center flex flex-col justify-center items-center p-3 text-xs sm:text-sm rounded-md cursor-pointer"
                  {...getRootProps()}
                >
                  <input {...getInputProps()} />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-upload"
                    viewBox="0 0 16 16"
                  >
                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
                    <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708z" />
                  </svg>
                  <span>
                    Clique aqui e escolha um arquivo para esta área para fazer
                    upload.
                  </span>
                </div>
                <p className="text-xs">
                  Permitido somente imagens com extensão .jpg, .jpeg e .png.
                  <br />
                  Dimensão recomendada de 1080x1080px.
                </p>
              </div>
            )}

            {uploadedImage && (
              <div className="space-y-3">
                <TitleSection title={"Agradecemos o seu apoio!"} />
                <div
                  id="canvas-container"
                  className="relative w-72 h-72 rounded-full overflow-hidden"
                >
                  <img
                    src={uploadedImage}
                    alt="Uploaded"
                    style={{
                      position: "absolute",
                      width: "100%",
                      height: "100%",
                      objectPosition: "center",
                    }}
                  />
                  <img
                    src={overlayImage}
                    alt="Overlay"
                    style={{
                      position: "absolute",
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="flex flex-col items-end space-y-2">
                  <button
                    onClick={handleDownload}
                    className="bg-orange-400 hover:bg-orange-500 duration-300 w-full py-2 font-medium"
                  >
                    Baixe sua foto
                  </button>
                  <button {...getRootProps()} className="text-sm w-fit">
                    Escolher outra foto
                    <input {...getInputProps()} />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
