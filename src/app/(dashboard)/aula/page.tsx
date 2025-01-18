import { ContentCard } from "../../../../design-system/features/ContentView/ContentCard";
import { ItemProps } from "../../../../design-system/ui/Items";

const data: ItemProps[] = [
        { key: 'Título', value: 'Técnicas Avançadas de Integração de Sistemas' },
        { key: 'Duração', value: '3 horas' },
        { key: 'Data', value: '13 dezembro 2024' },
        { key: 'Local', value: 'Online' },
];


export default function aula() {
    return (
      <div className="p-6 ">
        <div className="space-y-4">
          <div className="flex justify-between space-x-4">
            <ContentCard title="Summary" data={data} />
            <ContentCard title="Summary" data={data} />
          </div>
          <ContentCard title="Summary" data={data} />
          <ContentCard title="Summary" data={data} />
          <div className="flex justify-between">
            <ContentCard title="Summary" data={data} />
            <ContentCard title="Summary" data={data} />
          </div>
        </div>
      </div>
    );
  }
  