const WI_HOST = "//wi.ournetcdn.net";
const ASSETS_HOST = "//assets.ournetcdn.net";

export const wi = {
  stories: function (size: string, id: string): string {
    return (
      WI_HOST +
      "/stories/" +
      id.substring(0, 4) +
      "/" +
      size +
      "/" +
      id +
      ".jpg"
    );
  },

  news: function (size: string, id: string): string {
    return (
      WI_HOST + "/news/" + id.substring(0, 4) + "/" + size + "/" + id + ".jpg"
    );
  }
};

const COUNTRY_MAP: { [index: string]: string } = {
  md: "click",
  pl: "diez",
  al: "moti2",
  ru: "zborg",
  lv: "meteo2",
  kz: "meteo2",
  vn: "thoi"
};

export const assets = {
  img: {
    logo: function (nameOrCountry: string): string {
      if (nameOrCountry && nameOrCountry.length === 2) {
        nameOrCountry = COUNTRY_MAP[nameOrCountry] || "ournet";
      }
      nameOrCountry = nameOrCountry || "ournet";

      return ASSETS_HOST + "/ournet/img/logos/" + nameOrCountry + "-logo.png";
    }
  }
};
