var xmlSynonymsData = "";
xmlSynonymsData += '<?xml version=\"1.0\" encoding=\"utf-8\"?>';
xmlSynonymsData += '<MadCapSynonyms xml:lang=\"en-us\">';
xmlSynonymsData += '    <Groups />';
xmlSynonymsData += '    <Directional>';
xmlSynonymsData += '        <DirectionalSynonym Stem=\"true\" From=\"problem solving\" To=\"error\" FromStem=\"problem solv\" />';
xmlSynonymsData += '        <DirectionalSynonym Stem=\"true\" From=\"error\" To=\"problem solv\" FromStem=\"error\" />';
xmlSynonymsData += '        <DirectionalSynonym Stem=\"true\" From=\"troubleshooting\" To=\"problem solv\" FromStem=\"troubleshoot\" />';
xmlSynonymsData += '    </Directional>';
xmlSynonymsData += '</MadCapSynonyms>';
MadCap.Utilities.Xhr._FilePathToXmlStringMap.Add('Synonyms', xmlSynonymsData);