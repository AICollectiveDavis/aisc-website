import { Card, CardContent } from "@/components/ui/card"

export default function Testimonials() {
    return (
                <section className="pb-12 bg-background relative z-30">
                  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* <h2 className="text-3xl font-bold mb-8 text-center text-balance">What Our Members Say</h2> */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <Card className="glass-card">
                        <CardContent className="px-6">
                          <p className="text-muted-foreground mb-4 text-pretty">
                            AISC has helped me build my technical, leadership, and communication skills (landed me two internships!), but more importantly, helped me meet some of my closest friends. I think anywone who is looking for strong community and diverse experience should heavily consider joining!
                          </p>
                          <div className="flex items-center">
                            <div className="w-10 h-10 bg-primary rounded-full mr-3" />
                            <div>
                              <div className="font-medium">Abhinav Tata</div>
                              <div className="text-sm text-muted-foreground">Computer Science + Statistics (ML)<br />c/o 2026</div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
        
                      <Card className="glass-card">
                        <CardContent className="px-6">
                          <p className="text-muted-foreground mb-4 text-pretty">
                            &quot;As someone from a non-technical background, I was intimidated by AI. This collective created such a
                            welcoming environment that I was able to learn and contribute to projects despite my initial lack of
                            experience.&quot;
                          </p>
                          <div className="flex items-center">
                            <div className="w-10 h-10 bg-secondary rounded-full mr-3" />
                            <div>
                              <div className="font-medium">Morgan Johnson</div>
                              <div className="text-sm text-muted-foreground">Cognitive Science, Class of 2024</div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </section>
    )
}