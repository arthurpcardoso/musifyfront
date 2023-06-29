import {dataProvider} from "./dataprovider";


export const customDataProvider = {
    ...dataProvider,
    update: (resource, params) => {
        if (resource !== 'artists') {
            return dataProvider.update(resource, params);
        }

        console.log(params.data);

        const newPhoto = [params.data.photo.rawFile]

        return Promise.all(newPhoto.map(convertFileToBase64))
            .then(base64Photo =>
                dataProvider.update(resource, {
                    id: params.id,
                    data: {
                        ...params.data,
                        photo: base64Photo[0]
                }})
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
