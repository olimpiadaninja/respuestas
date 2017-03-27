module.exports = (sequelize, DataTypes) => sequelize.define('Respuestas', {
    uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    /**
     * TODO: Composite index {amigoId, examenId}
     */
    amigoId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
    },
    examenId: { type: DataTypes.STRING },
    respuestas: DataTypes.TEXT
});
