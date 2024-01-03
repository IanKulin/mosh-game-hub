
export const getCroppedImageUrl = (url: string, width: number = 600, height: number = 400) => {
    // insert /crop/<width>/<height> after /media/ in the image URL
    const target = "media/";
    const insertIndex = url.indexOf(target) + target.length;
    const crop = `crop/${width}/${height}/`;
    return url.slice(0, insertIndex) + crop + url.slice(insertIndex);
};

