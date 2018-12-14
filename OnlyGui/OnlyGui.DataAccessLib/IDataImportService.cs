using System;

namespace OnlyGui.DataAccessLib
{
    public interface IDataImportService
    {
        bool EnsureData(IOnlyGuiContext context, string jsonDataFilePath);

        int ImportFromJson(IOnlyGuiContext context, string json);
    }
}