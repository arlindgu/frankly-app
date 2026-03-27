import { getBooks, getCards } from "@/lib/data";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";



export default async function DashboardPage() {
    const books = await getBooks();
    const cards = await getCards();




return (
  <div className="h-full">
      <ResizablePanelGroup orientation="horizontal">
        <ResizablePanel
        defaultSize="33%">One</ResizablePanel>
        <ResizableHandle />
        <ResizablePanel>Two</ResizablePanel>
      </ResizablePanelGroup>
    </div>
);
}