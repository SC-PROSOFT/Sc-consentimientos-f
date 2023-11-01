import { empresas } from "../fuentes";
import { useApiContabilidad } from "@/store";

const { getNit } = useApiContabilidad();
const default_img_base64 =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";

export const useGlobal = () => {
  const datos_url = "ZGF0b3NfdXJs";
  const info_empresa = empresas[getNit];

  function subirFirma({ name_img, img_bs64 }) {
    return new Promise((resolve, reject) => {
      const empresa = JSON.parse(sessionStorage.datos_empresa);
      const path_unid = empresa.IPUSU.trim().split("/").shift();
      let datos_envio = new FormData();

      datos_envio.append("name_img", name_img);
      datos_envio.append("img_base64", img_bs64);
      datos_envio.append("path_unid", path_unid);

      console.log("⚡  datos_envio-- >", datos_envio);
      fetch(`${info_empresa.ip_servicio}inc/service.save_img.firm.php`, {
        method: "POST",
        body: datos_envio,
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.STATUS == 99) resolve(data);
          else reject(data);
        })
        .catch(reject);
    });
  }

  return {
    datos_url,
    subirFirma,
  };
};
