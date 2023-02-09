import {dataProvider} from "./dataprovider";



export const customDataProvider = {
    ...dataProvider,
    update: (resource, params) => {
        if (resource !== 'artists') {
            return dataProvider.update(resource, params);
        }

        const newPicture = [params.data.photo.rawFile]

        return Promise.all(newPicture.map(convertFileToBase64))
            .then(transformedNewPicture =>
                dataProvider.update(resource, {
                    data: {
                        ...params.data,
                        photo: transformedNewPicture[0],
                    },
                })
            );
    },
};


const convertFileToBase64 = file =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
