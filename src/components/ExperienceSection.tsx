
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin, Building } from "lucide-react";
import React from "react";

const ExperienceSection: React.FC = () => (
  <section id="experience" className="py-16 sm:py-20 px-4 sm:px-6 bg-muted/30">
    <div className="container mx-auto max-w-4xl">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-primary">Experience</h2>
      
      <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-8">
        {/* Main Role Card */}
        <Card className="border-border hover:border-primary transition-all duration-300 hover:shadow-lg md:col-span-2">
          <CardHeader className="pb-4">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Building className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-primary text-xl sm:text-2xl">IT Manager</CardTitle>
                  <CardDescription className="text-base flex items-center gap-4 mt-2">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      BlueThink
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      2025 - Present
                    </span>
                  </CardDescription>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Internal IT Services Management</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Network Security</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Systems Security</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>RMM</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>EDR</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>IPS</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Previous Experience Section */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-6 text-primary text-center">Previous Experience</h3>
        
        <div className="grid md:grid-cols-2 gap-6">

          <Card className="border-border hover:border-primary/50 transition-all duration-300 hover:shadow-md">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-red-100 dark:bg-red-900/20 rounded-lg">
                  <Building className="w-5 h-5 text-red-600 dark:text-red-400" />
                </div>
                <div>
                  <CardTitle className="text-lg">Cybersecurity Analyst</CardTitle>
                  <CardDescription className="text-sm">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      Lutech Group
                    </span>
                    <span className="flex items-center gap-1 mt-1">
                      <Calendar className="w-3 h-3" />
                      2024 - 2025
                    </span>
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                  <span>Identity Management</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                  <span>Vulnerability Assesment</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                  <span>VAPT</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                  <span>Sailpoint IdentityIQ</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                  <span>Qualys</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                  <span>Skybox</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Previous Role 1 */}
          <Card className="border-border hover:border-primary/50 transition-all duration-300 hover:shadow-md">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
                  <Building className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <CardTitle className="text-lg">DevSecOps Engineer</CardTitle>
                  <CardDescription className="text-sm">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      Certimeter Group
                    </span>
                    <span className="flex items-center gap-1 mt-1">
                      <Calendar className="w-3 h-3" />
                      2023 - 2024
                    </span>
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  <span>DevSecOps project</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  <span>Kubernetes</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  <span>Terraform</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Previous Role 2 */}
          <Card className="border-border hover:border-primary/50 transition-all duration-300 hover:shadow-md">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-orange-100 dark:bg-orange-900/20 rounded-lg">
                  <Building className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                </div>
                <div>
                  <CardTitle className="text-lg">System Administrator</CardTitle>
                  <CardDescription className="text-sm">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      Papa Giovanni XXIII Hospital
                    </span>
                    <span className="flex items-center gap-1 mt-1">
                      <Calendar className="w-3 h-3" />
                      2018 - 2018
                    </span>
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                  <span>System and network management</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                  <span>Employee Smart-Card management</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                  <span>Trend-Micro antivirus suite</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Previous Role 3 */}
{/*           <Card className="border-border hover:border-primary/50 transition-all duration-300 hover:shadow-md">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-100 dark:bg-green-900/20 rounded-lg">
                  <Database className="w-5 h-5 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <CardTitle className="text-lg">System Administrator</CardTitle>
                  <CardDescription className="text-sm">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      DataFlow Systems
                    </span>
                    <span className="flex items-center gap-1 mt-1">
                      <Calendar className="w-3 h-3" />
                      2014 - 2016
                    </span>
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                  <span>Server Management & Monitoring</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                  <span>Database Administration</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                  <span>Backup & Recovery Solutions</span>
                </div>
              </div>
            </CardContent>
          </Card> */}

          {/* Previous Role 4 */}
{/*           <Card className="border-border hover:border-primary/50 transition-all duration-300 hover:shadow-md">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-100 dark:bg-purple-900/20 rounded-lg">
                  <Shield className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <CardTitle className="text-lg">Junior Security Analyst</CardTitle>
                  <CardDescription className="text-sm">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      SecureNet Ltd.
                    </span>
                    <span className="flex items-center gap-1 mt-1">
                      <Calendar className="w-3 h-3" />
                      2012 - 2014
                    </span>
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                  <span>Security Monitoring & Analysis</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                  <span>Incident Documentation</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                  <span>Security Tool Configuration</span>
                </div>
              </div>
            </CardContent>
          </Card> */}
        </div>
      </div>
    </div>
  </section>
);

export default ExperienceSection;
