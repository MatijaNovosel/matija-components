/**
 * Returns a mime type from a file extension.
 * @param {string} extension - File extension.
 * @return Mime type of the file.
 * @example const mimeType = getMimeTypeFromExtension("html"); // text/html
 */
export function getMimeTypeFromExtension(extension: string): string {
  switch (extension.toLowerCase()) {
    case "html":
    case "htm":
    case "shtml":
      return "text/html";
    case "css":
      return "text/css";
    case "xml":
      return "text/xml";
    case "gif":
      return "image/gif";
    case "jpg":
    case "jpeg":
      return "image/jpeg";
    case "js":
      return "application/x-javascript";
    case "atom":
      return "application/atom+xml";
    case "rss":
      return "application/rss+xml";
    case "mml":
      return "text/mathml";
    case "txt":
      return "text/plain";
    case "jad":
      return "text/vnd.sun.j2me.app-descriptor";
    case "wml":
      return "text/vnd.wap.wml";
    case "htc":
      return "text/x-component";
    case "png":
      return "image/png";
    case "tiff":
    case "tif":
      return "image/tiff";
    case "wbmp":
      return "image/vnd.wap.wbmp";
    case "ico":
      return "image/x-icon";
    case "jng":
      return "image/x-jng";
    case "bmp":
      return "image/x-ms-bmp";
    case "svg":
      return "image/svg+xml";
    case "webp":
      return "image/webp";
    case "jar":
    case "war":
    case "ear":
      return "application/java-archive";
    case "hqx":
      return "application/mac-binhex40";
    case "doc":
      return "application/msword";
    case "pdf":
      return "application/pdf";
    case "ps":
    case "eps":
    case "ai":
      return "application/postscript";
    case "rtf":
      return "application/rtf";
    case "xls":
      return "application/vnd.ms-excel";
    case "ppt":
      return "application/vnd.ms-powerpoint";
    case "wmlc":
      return "application/vnd.wap.wmlc";
    case "kml":
      return "application/vnd.google-earth.kml+xml";
    case "kmz":
      return "application/vnd.google-earth.kmz";
    case "7z":
      return "application/x-7z-compressed";
    case "cco":
      return "application/x-cocoa";
    case "jardiff":
      return "application/x-java-archive-diff";
    case "jnlp":
      return "application/x-java-jnlp-file";
    case "run":
      return "application/x-makeself";
    case "pl":
    case "pm":
      return "application/x-perl";
    case "prc":
    case "pdb":
      return "application/x-pilot";
    case "rar":
      return "application/x-rar-compressed";
    case "rpm":
      return "application/x-redhat-package-manager";
    case "sea":
      return "application/x-sea";
    case "swf":
      return "application/x-shockwave-flash";
    case "sit":
      return "application/x-stuffit";
    case "tcl":
    case "tk":
      return "application/x-tcl";
    case "der":
    case "pem":
    case "crt":
      return "application/x-x509-ca-cert";
    case "xpi":
      return "application/x-xpinstall";
    case "xhtml":
      return "application/xhtml+xml";
    case "zip":
      return "application/zip";
    case "mp3":
      return "audio/x-mp3";
    case "wav":
      return "audio/x-wav";
    default:
      return "application/pdf";
  }
}

/**
 * Returns a file extension from a file name.
 * @param {string} fileName - File name.
 * @return File extension.
 */
export function getExtensionFromFileName(fileName: string): string {
  return fileName.split(".").pop() as string;
}

export const base64ToFile = async (
  base64: string | null | undefined,
  fileName: string | null | undefined
): Promise<File | null> => {
  if (base64 && fileName) {
    const type = getMimeTypeFromExtension(getExtensionFromFileName(fileName));
    const blob = await (await fetch(base64)).blob();
    const file = new File([blob], fileName, { type });
    return file;
  }
  return null;
};

/**
 * Downloads a file provided in the function parameters.
 * @param {File} file - File.
 */
export async function download(file: File) {
  if ((window.navigator as any).msSaveOrOpenBlob) {
    // IE11
    (window.navigator as any).msSaveOrOpenBlob(file, file.name);
  } else {
    const fileURL = window.URL.createObjectURL(file);
    const link = document.createElement("a");
    link.href = fileURL;
    link.setAttribute("download", file.name);
    // document.body.appendChild(link);
    link.click();
    // link.remove();
  }
}
