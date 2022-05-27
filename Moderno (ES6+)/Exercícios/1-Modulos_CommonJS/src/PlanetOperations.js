module.exports = {
    get AU_TO_KILOMETERS() { return 149587870 },

    convertAUtoKm(au) {
        return au * this.AU_TO_KILOMETERS
    }
}