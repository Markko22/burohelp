import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface AnalysisResultProps {
  results: {
    oggetto: string;
    descrizione: string;
    requisiti: string;
    modalita: string;
    allegati: string;
    ulteriori: string;
  };
}

export function AnalysisResult({ results }: AnalysisResultProps) {
  const sections = [
    { title: "Oggetto del Bando", content: results.oggetto },
    { title: "Descrizione sintetica del bando", content: results.descrizione },
    { title: "Requisiti del Bando", content: results.requisiti },
    { title: "Modalità e termini del Bando", content: results.modalita },
    { title: "Eventuale elenco allegati al Bando", content: results.allegati },
    { title: "Ulteriori informazioni utili del Bando", content: results.ulteriori },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {sections.map((section, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle className="text-lg">{section.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 whitespace-pre-line">{section.content}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}