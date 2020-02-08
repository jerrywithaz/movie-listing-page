import convertSlugToName from './../convertSlugToName';

describe("utils/convertSlugToName", () => {

    it("should convert slug to proper title", () => {

        const slug = "birds-of-prey";
        const converted = convertSlugToName(slug);

        expect(converted).toEqual("Birds Of Prey");
        
    });

});