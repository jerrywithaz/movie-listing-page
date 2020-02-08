import startCase from 'lodash/startCase';

function convertSlugToName(slug: string) {
    return startCase(slug.replace(/-/g, " "));
};

export default convertSlugToName;